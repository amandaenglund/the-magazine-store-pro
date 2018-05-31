const CartPageComponent = {

  template: `
    <div class="row">
      <cart class="col-12"></cart>
      <div class="col-12">
      <label for="first-name">Förnamn:</label>
      <input name="first-name" v-model="firstName"></input>
      <button v-on:click="pay">Betala</button>
      <div id="betalat"></div>
      </div>
    </div>
  `,


  data() {
    return {
      firstName: 'Glenn'
    }
  },

  methods: {
      pay: ()=>{
        alert('Du har betalat');
        console.log('pay it Glenn');
        
        http.post('/rest/pay', {}).then(response => {
          console.log(response);
        }).catch(error => {
          console.error(error);
        });
      }
  }

}