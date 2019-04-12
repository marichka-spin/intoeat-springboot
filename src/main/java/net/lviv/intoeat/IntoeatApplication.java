package net.lviv.intoeat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("net.lviv.intoeat.repositories")
@EntityScan("net.lviv.intoeat.models")
//@ComponentScan({"net.lviv.intoeat.services", "net.lviv.intoeat.validation"})
@SpringBootApplication
public class IntoeatApplication {

	public static void main(String[] args) {
		SpringApplication.run(IntoeatApplication.class, args);
	}

}
