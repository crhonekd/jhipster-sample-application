package com.dave.service;

public class UsernameAlreadyUsedException extends RuntimeException {

    public UsernameAlreadyUsedException() {
        super("Login name already used!");
    }

}
