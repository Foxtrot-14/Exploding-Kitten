package controller

import "github.com/gin-gonic/gin"
func GetTests(c *gin.Context){
	c.JSON(200,gin.H{"msg":"Works"})
}