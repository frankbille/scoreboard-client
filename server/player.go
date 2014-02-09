package scoreboard

type Player struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	FullName string `json:"fullName"`
}

type PlayerList struct {
	Players    []Player   `json:"players"`
	Pagination Pagination `json:"pagination,omitempty"`
}
