package main

import (
	"Kitten/app/middleware"
	"Kitten/app/routes"

	"github.com/gin-gonic/gin"
)
func main(){
	port := ":8080";
	r := gin.Default();
	r.Use(gin.Recovery(),middleware.Logger());
	routes.SetUpRoutes(r);
	r.Run(port);
}