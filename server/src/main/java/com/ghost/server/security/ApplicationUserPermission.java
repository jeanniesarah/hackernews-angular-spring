package com.ghost.server.security;

public enum ApplicationUserPermission {
    ITEM_READ("item:read"),
    ITEM_WRITE("item:write"),
    COURSE_READ("course:read"),
    COURSE_WRITE("course:write");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
