package com.ghost.server.item;

public class Item {
    private final Integer itemId;
    private final String itemTitle;

    public Item(Integer itemId, String itemTitle) {
        this.itemId = itemId;
        this.itemTitle = itemTitle;
    }

    public Integer getItemId(){
        return itemId;
    }

    public String getItemTitle(){
        return itemTitle;
    }
}
