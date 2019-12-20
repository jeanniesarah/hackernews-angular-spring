package com.ghost.server.security;

import com.google.common.collect.Sets;

import java.util.Set;

import static com.ghost.server.security.ApplicationUserPermission.*;

public enum ApplicationUserRole {
    MEMBER(Sets.newHashSet()),
    SUPERADMIN(Sets.newHashSet(ITEM_READ, ITEM_WRITE, COURSE_READ, COURSE_WRITE)),
    ADMIN(Sets.newHashSet(ITEM_READ, COURSE_READ));

    private final Set<ApplicationUserPermission> permissions;

    ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<ApplicationUserPermission> getPermissions() {
        return permissions;
    }
}
