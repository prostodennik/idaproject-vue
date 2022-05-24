<template>
  <li class="product">
    <div class="remove" @click="removeProdState"></div>
    <div class="product__photo">
      <img src="../assets/photo.png" alt="" class="product__img" />
    </div>
    <div class="product__info">
      <h2 class="product__name">{{ objectNames.name }}</h2>
      <div class="product__desc">
        <p>
          {{ objectNames.desc }}
        </p>
      </div>
      <div class="product__price">{{ objectNames.price }}</div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    objectNames: Object,
  },
  methods: {
    ...mapMutations(["removeProd"]),
    removeProdState() {
      this.removeProd(this.objectNames.id);
      console.log(this.objectNames.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../layout.scss';


.remove {
  position: absolute;
  top: -0.9375rem;
  right: -0.625rem;
  margin: auto;
  width: 2.5rem;
  height: 2.5rem;
}

.product {
  width: 32%;
  max-width: calc(var(--index) * 15);
  min-height: 27.5rem;
  margin-bottom: rem(8px);
  position: relative;
  background-color: #fffefb;
  border-radius: 4px;

  @include tablets {
    margin-right: 0;
  }

  @include phones {
    max-width: 100%;
    width: 100%;
  }

  &:hover:before {
    // content: url(../assets/trash.png);
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d_4_347)'%3E%3Crect x='4' y='2' width='32' height='32' rx='10' fill='%23FF8484'/%3E%3C/g%3E%3Cg clip-path='url(%23clip0_4_347)'%3E%3Cpath d='M22.207 15.7969C22 15.7969 21.8322 15.9646 21.8322 16.1716V23.2535C21.8322 23.4604 22 23.6283 22.207 23.6283C22.4139 23.6283 22.5817 23.4604 22.5817 23.2535V16.1716C22.5817 15.9646 22.4139 15.7969 22.207 15.7969Z' fill='white'/%3E%3Cpath d='M17.7854 15.7969C17.5785 15.7969 17.4107 15.9646 17.4107 16.1716V23.2535C17.4107 23.4604 17.5785 23.6283 17.7854 23.6283C17.9924 23.6283 18.1602 23.4604 18.1602 23.2535V16.1716C18.1602 15.9646 17.9924 15.7969 17.7854 15.7969Z' fill='white'/%3E%3Cpath d='M14.5629 14.7634V23.9953C14.5629 24.541 14.763 25.0534 15.1126 25.4211C15.4605 25.7898 15.9447 25.9991 16.4514 26H23.541C24.0478 25.9991 24.532 25.7898 24.8798 25.4211C25.2293 25.0534 25.4294 24.541 25.4294 23.9953V14.7634C26.1242 14.5789 26.5745 13.9077 26.4815 13.1947C26.3884 12.4819 25.7811 11.9487 25.0622 11.9485H23.1437V11.4801C23.1459 11.0863 22.9902 10.708 22.7113 10.4298C22.4325 10.1517 22.0537 9.99683 21.6598 10H18.3325C17.9387 9.99683 17.5599 10.1517 17.281 10.4298C17.0022 10.708 16.8465 11.0863 16.8487 11.4801V11.9485H14.9302C14.2112 11.9487 13.6039 12.4819 13.5108 13.1947C13.4179 13.9077 13.8681 14.5789 14.5629 14.7634ZM23.541 25.2506H16.4514C15.8107 25.2506 15.3124 24.7002 15.3124 23.9953V14.7963H24.68V23.9953C24.68 24.7002 24.1816 25.2506 23.541 25.2506ZM17.5981 11.4801C17.5956 11.285 17.6723 11.0972 17.8107 10.9595C17.9491 10.8218 18.1373 10.7461 18.3325 10.7495H21.6598C21.8551 10.7461 22.0433 10.8218 22.1816 10.9595C22.3201 11.0971 22.3968 11.285 22.3943 11.4801V11.9485H17.5981V11.4801ZM14.9302 12.6979H25.0622C25.4347 12.6979 25.7367 12.9999 25.7367 13.3724C25.7367 13.7449 25.4347 14.0469 25.0622 14.0469H14.9302C14.5577 14.0469 14.2557 13.7449 14.2557 13.3724C14.2557 12.9999 14.5577 12.6979 14.9302 12.6979Z' fill='white'/%3E%3Cpath d='M19.9962 15.7969C19.7892 15.7969 19.6215 15.9646 19.6215 16.1716V23.2535C19.6215 23.4604 19.7892 23.6283 19.9962 23.6283C20.2032 23.6283 20.3709 23.4604 20.3709 23.2535V16.1716C20.3709 15.9646 20.2032 15.7969 19.9962 15.7969Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d_4_347' x='0' y='0' width='40' height='40' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='2'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_4_347'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_4_347' result='shape'/%3E%3C/filter%3E%3CclipPath id='clip0_4_347'%3E%3Crect width='16' height='16' fill='white' transform='translate(12 10)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    position: absolute;
    top: rem(-15px);
    right: rem(-10px);
    margin: auto;
    width: rem(40px);
    height: rem(40px);
  }

  &__info {
    padding: rem(16px) rem(16px) rem(24px) rem(16px);
  }

  &__price {
    font-weight: bold;
    font-size: 24px;
  }

  &__name {
    margin-bottom: rem(16px);
    // font-size: rem(20px);
    font-size: calc(var(--index) * 1.093);
  }

  &__desc {
    text-align: left;
    font-size: calc(var(--index) * 1.093);
  }
}
</style>
