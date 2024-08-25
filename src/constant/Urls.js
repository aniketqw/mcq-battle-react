export class Urls {
  static Home() {
    return "/";
  }
  static Login() {
    return "/login";
  }
  static Signup() {
    return "/signup";
  }

  static Mcqs = class {
    static Mcqa() {
      return "/mcqs";
    }
    static Mcq(id) {
      return `/mcqs/${id}`;
    }
    static NewMcq() {
      return "/mcqs/new";
    }
    static EditMcq(id) {
      return `/mcq/${id}/edit`;
    }
  };

   static Game = class {
    static Lobby() {
      return "/game/lobby";
    }
    static CreateGame() {
      return "/game/create";
    }
    static ListGames() {
      return "/game/list";
    }
    static JoinGame() {
      return "/game/join";
    }
  };

}
