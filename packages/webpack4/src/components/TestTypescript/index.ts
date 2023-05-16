
class TestTypescript {
  msg: string;
  constructor(message: string) {
    this.msg = message;
  }

  alertData() {
    alert(this.msg);
  }
}

export default TestTypescript;
