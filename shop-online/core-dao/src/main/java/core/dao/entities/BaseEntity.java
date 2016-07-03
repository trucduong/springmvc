/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package core.dao.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

/**
 * Base entity
 *
 */
@MappedSuperclass
public abstract class BaseEntity implements Serializable {
	private static final long serialVersionUID = -4238716080849547677L;
	public static final String SHORT = "nvarchar(50)";
	public static final String MEDIUM = "nvarchar(100)";
	public static final String LONG = "nvarchar(500)";
	public static final String LONG_1 = "nvarchar(1000)";
	public static final String LONG_2 = "nvarchar(2000)";
	public static final String LONG_3 = "nvarchar(3000)";
	public static final String LONG_4 = "nvarchar(4000)";
	public static final String LONG_5 = "nvarchar(5000)";

	// @Id
	// @GeneratedValue(strategy=GenerationType.IDENTITY)
	// protected int id;

	@Version
	@Column(name = "version")
	private int version;

	/**
	 * @return the version
	 */
	public int getVersion() {
		return version;
	}

	public abstract Object getColIdValue();
	public abstract String getColIdName();
}