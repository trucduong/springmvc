package core.dao.dto;

public interface Dto <E> {
	void bind(E entity, String action);
	void unbind(E entity, String action);
}
