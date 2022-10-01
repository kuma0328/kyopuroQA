package router

import (
	"github.com/gin-gonic/gin"
	"github.com/kuma0328/kyopuroQA/server/db"
	"github.com/kuma0328/kyopuroQA/server/handler/middleware"
)

func InitRouter(db db.DB) *gin.Engine {
	// router作成
	r := gin.Default()
	
	// 信頼できるproxy？
	r.SetTrustedProxies([]string{"*"})

	// cors設定
	middleware.Cors(r)

	initHealthRouter(r)
	return r
}