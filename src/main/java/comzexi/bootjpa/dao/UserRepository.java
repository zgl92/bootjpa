package comzexi.bootjpa.dao;

import comzexi.bootjpa.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository  extends JpaRepository<User,Long> {


    /**
     * @param phone
     * @param password
     * @return
     */
    @Query("select u from User u where u.phone = :phone and u.password = :password")
    User findByUser(@Param("phone") String phone,
                    @Param("password") String password);
}
