package router

import (
	"github.com/gin-gonic/gin"
)

func initQuestionRouter(r *gin.Engine) {
	// Qustion 作成と取得したい

	rr := r.Group("/qa")
	rr.GET("/test", )
}