package net.lviv.intoeat.repositories;

import net.lviv.intoeat.models.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

}
