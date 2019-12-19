package com.ghost.server.security;

public enum ApplicationUserPermission {
    ITEM_READ("item:read"),
    ITEM_WRITE("item:write"),
    MEMBER_READ("member:read"),
    MEMBER_WRITE("member:write");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
