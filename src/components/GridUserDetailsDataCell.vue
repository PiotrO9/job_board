<template>
  <div class="GridUserDetailsDataCell">
    <p>{{ label }}</p>
    <div>
        <span>{{ data }}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: ['label', 'data']
}
</script>

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

.GridUserDetailsDataCell {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: $SmallComponentsFontFamily;

    p {
        text-align: center;
        margin-top: 10px;
        margin-left: 20px;
        margin-bottom: 10px;
        color: grey;
        font-size: 26px;

        @media (max-width: $SmallDesktopWidth) {
            font-size: 20px;
        }

        @media (max-width: $BigMobileWidth) {
            font-size: 15px;
            margin-left: 0px;
        }
    }

    div {
        @include flex-center;
        width: 100%;
        min-height: 60px;
        background-color: rgb(251,251,251);
        color: black;
        border: 2px solid rgb(249,249,249);
        border-radius: 15px;
        font-size: 40px;

        span {
            text-align: center;
            font-size: 32px;

            @media (max-width: $SmallDesktopWidth) {
                font-size: 22px;
            }

            @media (max-width: $BigMobileWidth) {
                font-size: 13px;
            }
        }

        @media (max-width: $BigMobileWidth) {
            min-height: 40px;
        }
    }
}
</style>