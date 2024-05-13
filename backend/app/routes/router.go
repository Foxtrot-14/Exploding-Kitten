package routes

import (
	"Kitten/app/controller"

	"github.com/gin-gonic/gin"
)
func SetUpRoutes(router *gin.Engine){
	router.GET("/test",controller.GetTests)
}