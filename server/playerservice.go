package scoreboard

import (
	"fmt"
	"github.com/emicklei/go-restful"
	"strconv"
)

type PlayerService struct {
}

func (ps PlayerService) GetAllPlayers(request *restful.Request, response *restful.Response) {
	pageParameter := request.QueryParameter("page")
	page, err := strconv.ParseUint(pageParameter, 10, 32)

	if err != nil {
		page = 1
	}

	var players [231]Player
	for i := 0; i < len(players); i++ {
		if i == 0 {
			players[i] = Player{
				Id:       "frankbille",
				Name:     "Frank",
				FullName: "Frank Bille",
				Email:    "frank@frankbille.dk",
			}
		} else {
			players[i] = Player{
				Id:       fmt.Sprintf("player%d", (i + 1)),
				Name:     fmt.Sprintf("Player %03d", (i + 1)),
				FullName: fmt.Sprintf("Full Name %03d", (i + 1)),
				Email:    fmt.Sprintf("player%d@example.com", (i + 1)),
			}
		}
	}

	playerList := PlayerList{}
	playerList.Pagination = NewPagination("/api/players", uint32(page), 20, uint64(len(players)))
	startIndex := (page - 1) * 20
	endIndex := page * 20
	if endIndex > uint64(len(players)) {
		endIndex = uint64(len(players))
	}
	playerList.Players = players[startIndex:endIndex]

	response.WriteEntity(playerList)
}
