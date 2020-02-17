<template>
  <div>
  <router-view to="/week"><h3>Электронный журнал</h3></router-view>
    <span >Школа № 30</span>
    <q-btn @click="scan()">go scan</q-btn>
  </div>
</template>

<script>
export default {

methods:{
  scan(){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
  }
}
}
</script>