package com.spring.example.core.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.apache.commons.lang.StringUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import com.spring.example.core.entity.BaseEntity;

public class BaseDao<T extends BaseEntity> implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@PersistenceContext(unitName = "persistenceUnit")
	private EntityManager em;

	private Class<T> persistentClass;

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
	public T refresh(T object) {
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
	public void remove(T entity) {
		getEm().remove(entity);
		getEm().flush();
	}

	public void removeById(int id) {
		String strQuery = " DELETE FROM " + getClassName() + " WHERE id = " + id;
		Query query = getEm().createQuery(strQuery);
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
	public void persist(T entity) {
		persistWithoutFlush(entity);
		getEm().flush();
	}

	/**
	 * get principal name of session context
	 * 
	 * @return
	 */
	private String getPrincipalName() {
		SecurityContext context = SecurityContextHolder.getContext();
		String principalName = context.getAuthentication() != null ? context.getAuthentication().getName() : "";
		return principalName;
	}

	/**
	 * Set value to audit trail columns after that persist an entity type of
	 * {@link BaseEntity}.
	 * 
	 * @param entity
	 */
	public void persistWithoutFlush(T entity) {
		if (StringUtils.isBlank(entity.getCreateBy())) {
			entity.setCreateBy(getPrincipalName());
		}

		if (entity.getCreateDate() == null) {
			entity.setCreateDate(new Date());
		}
		getEm().persist(entity);
	}

	/**
	 * Set value to audit trail columns after that persist a list entity type of
	 * {@link BaseEntity}. After that call <code>flush()</code> to flush data to
	 * db.
	 * 
	 * @param entity
	 */
	public void persistMultipleRows(List<T> entities) {
		for (T entity : entities) {
			if (StringUtils.isBlank(entity.getCreateBy())) {
				entity.setCreateBy(getPrincipalName());
			}

			if (entity.getCreateDate() == null) {
				entity.setCreateDate(new Date());
			}

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
	public void merge(T entity) {
		mergeWithoutFlush(entity);
		getEm().flush();
	}

	/**
	 * Set value to audit trail columns after that merge an entity type of
	 * {@link BaseNormalDao}.
	 * 
	 * @param entity
	 */
	public void mergeWithoutFlush(T entity) {
		entity.setUpdateBy(getPrincipalName());
		entity.setUpdateDate(new Date());

		getEm().merge(entity);
	}

	/**
	 * Find object by technical id.
	 * 
	 * @param id
	 *            technical id.
	 * @return object extends {@link BaseEntity}
	 */
	public T find(int id) {
		T persistent = getEm().find(getPersistentClass(), id);
		if (persistent == null) {
			return null;
		}

		// get fresh data of entity from db
		getEm().refresh(persistent);

		return persistent;
	}

	/**
	 * Find object by technical id with option that get fresh data from DB.
	 * 
	 * @param id
	 * @param refresh
	 * @return object extends {@link BaseEntity}
	 */
	public T find(int id, boolean refresh) {
		T persistent = getEm().find(getPersistentClass(), id);
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
	public T find(String name, Object value) {
		List<T> list = getAllDataByColumn(name, value);
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
	public T find(String[] names, Object[] values) {
		List<T> list = getAllDataByColumns(names, values);

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
	protected Class<T> getPersistentClass() {
		if (persistentClass == null) {
			persistentClass = (Class<T>) ((ParameterizedType) getClass().getGenericSuperclass())
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
	private List<T> getAllDataWithOrder(List<String> orderColumns, int firstIndex, int maxResult) {
		String className = getClassName();
		String strQuery = " SELECT  e " + " FROM " + className + " e ";
		if (orderColumns != null && orderColumns.size() > 0) {
			strQuery += " ORDER BY e." + StringUtils.join(orderColumns, ", e.");

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
	public List<T> getAllData() {
		return getAllDataWithOrder(null, -1, -1);
	}

	/**
	 * Get all data of an entity with paging.
	 * 
	 * @param firstIndex
	 * @param maxResult
	 * @return
	 */
	public List<T> getAllData(int firstIndex, int maxResult) {
		return getAllDataWithOrder(null, firstIndex, maxResult);
	}

	/**
	 * Get all data with default sort order by given column
	 * 
	 * @param orderColumns
	 *            name of attributes in entity
	 * @return list persisted object
	 */
	public List<T> getAllData(List<String> orderColumns) {
		return getAllDataWithOrder(orderColumns, -1, -1);
	}

	/**
	 * Get all data with default sort order by given column
	 * 
	 * @param orderColumns
	 *            name of attributes in entity
	 * @return list persisted object
	 */
	public List<T> getAllData(String... orderColumns) {
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
	public List<T> getAllData(List<String> orderColumns, int firstIndex, int maxResult) {
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
	public List<T> getAllDataByColumn(String name, Object value, String... orderColumns) {
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
	public List<T> getAllDataByColumns(String[] names, Object[] values, String... orderColumns) {
		Class<T> entityClass = getPersistentClass();
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
			strQuery += " ORDER BY e." + StringUtils.join(orderColumns, ", e.");
		}
		TypedQuery<T> query = getEm().createQuery(strQuery, entityClass);
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
}
