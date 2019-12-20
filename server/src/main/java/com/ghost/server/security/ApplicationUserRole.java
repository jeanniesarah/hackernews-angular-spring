package com.ghost.server.security;

import com.google.common.collect.Sets;

import java.util.Set;

import static com.ghost.server.security.ApplicationUserPermission.*;

public enum ApplicationUserRole {
    MEMBER(Sets.newHashSet()),
    ADMIN(Sets.newHashSet(ApplicationUserPermission.ITEM_READ, MEMBER_READ)),
    SUPERADMIN(Sets.newHashSet(ApplicationUserPermission.ITEM_READ, ITEM_WRITE, MEMBER_READ, MEMBER_WRITE));

    private final Set<ApplicationUserPermission> permissions;

    ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<ApplicationUserPermission> getPermissions() {
        return permissions;
    }
}
