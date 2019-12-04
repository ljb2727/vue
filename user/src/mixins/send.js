export const mixSend = {
  methods: {
    mixSend(cnt) {
      alert(cnt)
      this.$emit('send',cnt,this.userData);
    }
  }
}
