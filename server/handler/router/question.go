package router

import (
	"github.com/kuma0328/kyopuroQA/server/handler"
	"github.com/gin-gonic/gin"
)

func initQuestionRouter(r *gin.Engine) {
	// Qustion 作成と取得したい

	rr := r.Group("/qa")
	rr.GET("/test", QustionTest)
}