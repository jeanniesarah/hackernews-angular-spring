package com.ghost.server.item;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/v0/item")
public class ItemController {

    private static final List<Item> ITEMS = Arrays.asList(
            new Item(1, "How to..."),
            new Item(2, "11 Best Ways"),
            new Item(3, "Surprise Item")
    );

    @GetMapping(path = "{itemId}")
    public Item getItem(@PathVariable("itemId") Integer itemId) {
        return ITEMS.stream()
                .filter(item -> itemId.equals(item.getItemId()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("Item " + itemId + " does not exist"));
    }
}
