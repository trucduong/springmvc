package core.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.util.StringUtils;

import core.dao.entities.BaseEntity;

public class BaseDao<E extends BaseEntity> implements Serializable {
	private static final long serialVersionUID = 899460822359446551L;

	@PersistenceContext(unitName = "persistenceUnit")
	private EntityManager em;

	private Class<E> persistentClass;

	/**
	 * @param em
	 *            the em to set
	 */
	public void setEm(EntityManager em) {
		this.em = em;
	}

	/**
	 * @return the em
	 */
	public EntityManager getEm() {
		return em;
	}

	/**
	 * Refresh given object that means you update object with newest data in DB
	 * (refresh cache).
	 * 
	 * @param object
	 *            T
	 * @return fresh object in DB
	 */
	public E refresh(E object) {
		if (object != null) {
			getEm().refresh(object);
		}

		return object;
	}

	/**
	 * Remove persistent object extends {@link BaseEntity}. After that call
	 * <code>flush()</code> to flush data to db.
	 * 
	 * @param entity
	 */
	public void remove(E entity) {
		getEm().remove(entity);
		getEm().flush();
	}

	public void removeBy(String name, Object value) {
		StringBuilder strQuery = new StringBuilder(" DELETE FROM ").append(getClassName()).append(" WHERE ")
				.append(name).append(" = ").append(formatParam(value));
		Query query = getEm().createQuery(strQuery.toString());
		query.executeUpdate();
	}

	/**
	 * remove all from database
	 */
	public void removeAllData() {
		String strQuery = " DELETE FROM " + getClassName();
		Query query = getEm().createQuery(strQuery);
		query.executeUpdate();
	}

	/**
	 * remove all from database with specific classes
	 */
	public void removeAllData(Class<?>[] classArr) {
		for (Class<?> entityClass : classArr) {
			String strQuery = " DELETE FROM " + entityClass.getSimpleName();
			Query query = getEm().createQuery(strQuery);
			query.executeUpdate();
		}
	}

	/**
	 * Set value to audit trail columns after that persist an entity type of
	 * {@link BaseEntity}. After that call <code>flush()</code> to flush data to
	 * db.
	 * 
	 * @param entity
	 */
	public void persist(E entity) {
		getEm().persist(entity);
		getEm().flush();
	}

	/**
	 * Set value to audit trail columns after that persist a list entity type of
	 * {@link BaseEntity}. After that call <code>flush()</code> to flush data to
	 * db.
	 * 
	 * @param entity
	 */
	@SuppressWarnings("unchecked")
	public void persistMultipleRows(E... entities) {
		for (E entity : entities) {
			getEm().persist(entity);
		}
		getEm().flush();
	}

	/**
	 * Set value to audit trail columns after that merge an entity type of
	 * {@link BaseNormalDao}. After that call <code>flush()</code> to flush data
	 * to db.
	 * 
	 * @param entity
	 */
	public void merge(E entity) {
		getEm().merge(entity);
		getEm().flush();
	}

	/**
	 * Find object by technical id.
	 * 
	 * @param id
	 *            technical id.
	 * @return object extends {@link BaseEntity}
	 */
	public E find(Object id) {
		return find(id, false);
	}

	/**
	 * Find object by technical id with option that get fresh data from DB.
	 * 
	 * @param id
	 * @param refresh
	 * @return object extends {@link BaseEntity}
	 */
	public E find(Object id, boolean refresh) {
		E persistent = getEm().find(getPersistentClass(), id);
		if (persistent == null) {
			return null;
		}

		// get fresh data of entity from db
		if (refresh) {
			getEm().refresh(persistent);
		}

		return persistent;
	}

	/**
	 * Find object by specific field
	 * 
	 * @param name
	 * @param value
	 * @return
	 */
	public E find(String name, Object value) {
		List<E> list = getAllDataByColumn(name, value);
		if (list.isEmpty()) {
			return null;
		}
		return list.get(0);
	}

	/**
	 * Find object by specific fields
	 * 
	 * @param names
	 * @param values
	 * @return
	 */
	public E find(String[] names, Object[] values) {
		List<E> list = getAllDataByColumns(names, values);

		if (list.isEmpty()) {
			return null;
		}
		return list.get(0);
	}

	/**
	 * Gets persistent class.
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	protected Class<E> getPersistentClass() {
		if (persistentClass == null) {
			persistentClass = (Class<E>) ((ParameterizedType) getClass().getGenericSuperclass())
					.getActualTypeArguments()[0];
		}
		return persistentClass;
	}

	/**
	 * Convention method supports get all data in a entity with sorted columns
	 * 
	 * @param orderColumns
	 *            the result will be sorted by given list column
	 * @return list<T> of persisted object.
	 */
	@SuppressWarnings("unchecked")
	private List<E> getAllDataWithOrder(List<String> orderColumns, int firstIndex, int maxResult) {
		String className = getClassName();
		String strQuery = " SELECT  e " + " FROM " + className + " e ";
		if (orderColumns != null && orderColumns.size() > 0) {
			strQuery += " ORDER BY e." + StringUtils.collectionToDelimitedString(orderColumns, ", e.");

		}
		Query query = getEm().createQuery(strQuery);

		// apply paging
		if (firstIndex >= 0 && maxResult > 0) {
			query.setFirstResult(firstIndex);
			query.setMaxResults(maxResult);
		}

		return query.getResultList();
	}

	/**
	 * Get all data default sort by id.
	 * 
	 * @return List<T> persisted object.
	 */
	public List<E> getAllData() {
		return getAllDataWithOrder(null, -1, -1);
	}

	/**
	 * Get all data of an entity with paging.
	 * 
	 * @param firstIndex
	 * @param maxResult
	 * @return
	 */
	public List<E> getAllData(int firstIndex, int maxResult) {
		return getAllDataWithOrder(null, firstIndex, maxResult);
	}

	/**
	 * Get all data with default sort order by given column
	 * 
	 * @param orderColumns
	 *            name of attributes in entity
	 * @return list persisted object
	 */
	public List<E> getAllData(List<String> orderColumns) {
		return getAllDataWithOrder(orderColumns, -1, -1);
	}

	/**
	 * Get all data with default sort order by given column
	 * 
	 * @param orderColumns
	 *            name of attributes in entity
	 * @return list persisted object
	 */
	public List<E> getAllData(String... orderColumns) {
		return getAllDataWithOrder(Arrays.asList(orderColumns), -1, -1);
	}

	/**
	 * Empty Cache for free memory.
	 */
	public void clearCache() {
		getEm().getEntityManagerFactory().getCache().evictAll();
		getEm().clear();
	}

	/**
	 * get all data with list order columns
	 * 
	 * @param orderColumns
	 * @param firstIndex
	 * @param maxResult
	 * @return List<T>
	 */
	public List<E> getAllData(List<String> orderColumns, int firstIndex, int maxResult) {
		return getAllDataWithOrder(orderColumns, firstIndex, maxResult);
	}

	/**
	 * get class name for query
	 * 
	 * @return
	 */
	public String getClassName() {
		return getPersistentClass().getSimpleName();
	}

	/**
	 * get all data by pair of name/value and sort with name (optional)
	 * 
	 * @param name
	 * @param value
	 * @param orderColumns
	 * @return
	 */
	public List<E> getAllDataByColumn(String name, Object value, String... orderColumns) {
		return getAllDataByColumns(new String[] { name }, new Object[] { value }, orderColumns);
	}

	/**
	 * get all data by multi pairs of name/value and sort with name (optional)
	 * 
	 * @param names
	 * @param values
	 * @param orderColumns
	 * @return
	 */
	public List<E> getAllDataByColumns(String[] names, Object[] values, String... orderColumns) {
		Class<E> entityClass = getPersistentClass();
		String className = getClassName();

		String strQuery = "SELECT e " + "FROM " + className + " e WHERE e.";
		String andCondition = " AND e.";

		int i = 0;
		for (String name : names) {
			Object value = values[i++];
			if (value == null) {
				strQuery += name + " is null" + andCondition;
			} else {
				strQuery += name + " = ?" + i + andCondition;
			}
		}
		int endIndex = strQuery.lastIndexOf(andCondition);
		strQuery = strQuery.substring(0, endIndex);

		if (orderColumns != null && orderColumns.length > 0) {
			strQuery += " ORDER BY e." + StringUtils.arrayToDelimitedString(orderColumns, ", e.");
		}
		TypedQuery<E> query = getEm().createQuery(strQuery, entityClass);
		int j = 0;
		for (Object value : values) {
			j++;
			if (value != null) {
				query.setParameter(j, value);
			}
		}

		return query.getResultList();
	}

	/**
	 * delete data of table base on specific column
	 * 
	 * @param name
	 * @param value
	 * @return
	 */
	public int deleteAllDataByColumn(String name, Object value) {
		String className = getClassName();
		String strQuery = " DELETE FROM " + className + " e " + " WHERE e." + name + " = ?1";
		Query query = getEm().createQuery(strQuery).setParameter(1, value);
		return query.executeUpdate();
	}

	/**
	 * delete data of table base on specific columns
	 * 
	 * @param names
	 * @param values
	 * @return
	 */
	public int deleteAllDataByColumns(String[] names, Object[] values) {
		String className = getClassName();
		String strQuery = " DELETE FROM " + className + " e " + " WHERE e.";// +
																			// name
																			// +
																			// "
																			// =
																			// ?1";
		String andCondition = " AND e.";
		int i = 0;
		for (String name : names) {
			Object value = values[i++];
			if (value == null) {
				strQuery += name + " is null" + andCondition;
			} else {
				strQuery += name + " = ?" + i + andCondition;
			}
		}

		int endIndex = strQuery.lastIndexOf(andCondition);
		strQuery = strQuery.substring(0, endIndex);

		Query query = getEm().createQuery(strQuery);
		int j = 0;
		for (Object value : values) {
			j++;
			if (value != null) {
				query.setParameter(j, value);
			}
		}
		return query.executeUpdate();
	}
	//
	// @SuppressWarnings("unchecked")
	// public List<ResultDto> executeQuery(String queryStr, String[] columns,
	// Map<String, Object> params) {
	//
	// List<ResultDto> returnValues = new ArrayList<ResultDto>();
	//
	// // check columns
	// if (columns == null || columns.length == 0) {
	// return returnValues;
	// }
	//
	// try {
	// Query query = getEm().createQuery(queryStr);
	// if (params != null && !params.isEmpty()) {
	// Set<String> keyset = params.keySet();
	// for (String key : keyset) {
	// query.setParameter(key, params.get(key));
	// }
	// }
	//
	// List<Object[]> results = query.getResultList();
	// if (results != null && !results.isEmpty()) {
	// if (columns.length > 1) {
	// for (Object[] object : results) {
	// ResultDto item = new ResultDto();
	// for (int i = 0; i < columns.length; i++) {
	// item.put(columns[i], object[i]);
	// }
	//
	// returnValues.add(item);
	// }
	// } else {
	// for (Object object : results) {
	// ResultDto item = new ResultDto();
	// item.put(columns[0], object);
	//
	// returnValues.add(item);
	// }
	// }
	// }
	// } catch (Exception e) {
	// LOGGER.error("executeQuery", e);
	// }
	//
	// return returnValues;
	// }
	//
	// @SuppressWarnings("unchecked")
	// public List<ResultDto> executeNativeQuery(String queryStr, String[]
	// columns, Map<String, Object> params) {
	//
	// List<ResultDto> returnValues = new ArrayList<ResultDto>();
	//
	// // check columns
	// if (columns == null || columns.length == 0) {
	// return returnValues;
	// }
	//
	// try {
	// Query query = getEm().createNativeQuery(queryStr);
	// if (params != null && !params.isEmpty()) {
	// Set<String> keyset = params.keySet();
	// for (String key : keyset) {
	// query.setParameter(key, params.get(key));
	// }
	// }
	//
	// List<Object[]> results = query.getResultList();
	// if (results != null && !results.isEmpty()) {
	// for (Object[] object : results) {
	// ResultDto item = new ResultDto();
	// for (int i = 0; i < columns.length; i++) {
	// item.put(columns[i], object[i]);
	// }
	//
	// returnValues.add(item);
	// }
	// }
	// } catch (Exception e) {
	// LOGGER.error("executeNativeQuery", e);
	// }
	//
	// return returnValues;
	// }

	private Object formatParam(Object value) {
		if (value instanceof Integer) {
			return value;
		} else if (value instanceof String) {
			return new StringBuilder("'").append(value).append("'").toString();
		} else if (value instanceof Date) {
			return ((Date) value).getTime();
		} else {
			return value;
		}
	}
}
