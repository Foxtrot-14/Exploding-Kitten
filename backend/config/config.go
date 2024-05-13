package config

import (
	"context"
	"fmt"

	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()

func ExampleClient() {
    rdb := redis.NewClient(&redis.Options{
        Addr:     "localhost:6379",
        Password: "", 
        DB:       0, 
    })

    err := rdb.Set(ctx, "Name", "Jhon Doe", 0).Err()
    if err != nil {
        panic(err)
    }

    val, err := rdb.Get(ctx, "Name").Result()
    if err != nil {
        panic(err)
    }
    fmt.Println("Name", val)

    val2, err := rdb.Get(ctx, "Id").Result()
    if err == redis.Nil {
        fmt.Println("Id does not exist")
    } else if err != nil {
        panic(err)
    } else {
        fmt.Println("Id", val2)
    }
}
func main(){
	ExampleClient()
}