package com.ghost.server.item;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("management/api/v0/items")
public class ItemManagementController {
    private static final List<Item> ITEMS = Arrays.asList(
            new Item(1, "How to"),
            new Item(2, "Best Ways"),
            new Item(3, "Surprise Item")
    );

    //    hasRole('ROLE_') hasAnyRole('ROLE_') hasAuthority('permission') hasAnyAuthority('permission')

    @GetMapping
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_SUPERADMIN')") //TODO: REFACTOR LATER ROLE_MEMBER? 1:50
    public List<Item> getAllItems(){
        System.out.println("getAllItems");
        return ITEMS;
    }

    @PostMapping
    @PreAuthorize("hasAuthority('item:write')")
    public void insertNewItem(@RequestBody Item item){
        System.out.println("insertNewItem");
        System.out.println(item);
    }

    @DeleteMapping(path = "{itemId}")
    @PreAuthorize("hasAuthority('item:write')")
    public void deleteItem(@PathVariable("itemId") Integer itemId){
        System.out.println("deleteItem");
        System.out.println(itemId);
    }

    @PutMapping(path = "{itemId}")
    @PreAuthorize("hasAuthority('item:write')")
    public void updateItem(@PathVariable("itemId")Integer itemId, @RequestBody Item item){
        System.out.println("updateItem");
        System.out.println(String.format("%s %s", itemId, item));
    }
}
