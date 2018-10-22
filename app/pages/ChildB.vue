<template>
    <Page>
        <ActionBar :title="title"/>
        <GridLayout columns="*" rows="*">
                    <Button text="To App directly" @tap="goTo('App')" />
                    <Button text="To ChildA directly" @tap="goTo('ChildA')" />
                    <Button text="Reset" @tap="resetGo()" />

            <Label class="message" :text="msg" col="0" row="0"/>
        </GridLayout>
    </Page>
</template>
 
<script>

  export default {
    
      data() {
        return {
            msg: 'Hello World B!'
        }
    },
    computed: {
        title: ({someVal}) => 'Child B' + someVal
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
