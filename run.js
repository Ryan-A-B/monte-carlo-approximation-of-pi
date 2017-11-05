#!/bin/node

if (require("cluster").isMaster) {
    require("./master").handler();
} else {
    require("./worker").handler();
}