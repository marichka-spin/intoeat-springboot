package net.lviv.intoeat.exceptions;

public class DuplicateEntityException extends RuntimeException {

    public DuplicateEntityException() {

    }

    public DuplicateEntityException(String message) {
        super(message);
    }

    public DuplicateEntityException(String message, Object... args) {
        super(String.format(message, args));
    }

}
