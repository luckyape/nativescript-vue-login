<template>
    <Page>
        <ActionBar :title="title"/>
        <GridLayout columns="*" rows="*">
                    <Button text="To ChildB directly" @tap="goToChildB" />
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
    methods: {
        goToChildB() {
            this.goTo('ChildB', { props: { someVal: 'even more valuable' } } )
        }        
    },
    computed: {
        title: ({reset}) => 'Child A ' + reset
    },
    watch: {
        reset() {
            if(this.reset)
            this.resetGo()
        }
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
