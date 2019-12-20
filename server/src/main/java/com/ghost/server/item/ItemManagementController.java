package com.ghost.server.item;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("management/api/v0/items")
public class ItemManagementController {
    private static final List<Item> ITEMS = Arrays.asList(
            new Item(1, "How to..."),
            new Item(2, "11 Best Ways"),
            new Item(3, "Surprise Item")
    );

    @GetMapping
    public List<Item> getAllItems(){
        System.out.println("getAllItems");
        return ITEMS;
    }

    @PostMapping
    public void insertNewItem(@RequestBody Item item){
        System.out.println("insertNewItem");
        System.out.println(item);
    }

    @DeleteMapping(path = "{itemId}")
    public void deleteItem(@PathVariable("itemId") Integer itemId){
        System.out.println("deleteItem");
        System.out.println(itemId);
    }

    @PutMapping(path = "{itemId}")
    public void updateItem(@PathVariable("itemId")Integer itemId, @RequestBody Item item){
        System.out.println("updateItem");
        System.out.println(String.format("%s %s", itemId, item));
    }
}
