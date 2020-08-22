package handler

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
)

type jsonStruct struct {
	Name string
	Age  int
	Like []string
}

func Demo(c *gin.Context) {
	data := `{"name": "jimu", "age": 18, "like": ["eat", "play"]}`
	demo := jsonStruct{}
	_ = json.Unmarshal([]byte(data), &demo)
	c.JSON(200, demo)
}
