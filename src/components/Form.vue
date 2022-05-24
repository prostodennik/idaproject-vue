<template>
  <form class="form">
    <div class="form__col">
      <div class="form__row">
        <label class="form__block">
          <div class="form__circle">
            <div class="form__title">Наименование товара</div>
            <div class="circle"></div>
          </div>
          <div class="error">{{ validation.firstError("product.name") }}</div>
          <input
            v-model="product.name"
            type="text"
            class="form__input"
            placeholder="Введите наименование товара"
            :class="{ 'valid-error': validation.hasError('product.name') }"
          />
        </label>
        <label class="form__block">
          <div class="form__circle">
            <div class="form__title">Описание товара</div>
            <div class="circle"></div>
          </div>
          <textarea
            class="form__input form__input_textarea"
            name="comment"
            placeholder="Введите описание товара"
            v-model="product.desc"
          ></textarea>
        </label>
        <label class="form__block">
          <div class="form__circle">
            <div class="form__title">Ссылка на изображение товара</div>
            <div class="circle"></div>
          </div>
          <div class="error">{{ validation.firstError("product.link") }}</div>
          <input
            type="text"
            class="form__input"
            placeholder="Введите ссылку"
            v-model="product.link"
            :class="{ 'valid-error': validation.hasError('product.link') }"
          />
        </label>
        <label class="form__block">
          <div class="form__circle">
            <div class="form__title">Цена товара</div>
            <div class="circle"></div>
          </div>
          <div class="error">{{ validation.firstError("product.price") }}</div>
          <input
            type="text"
            class="form__input"
            placeholder="Введите цену"
            v-model="product.price"
            :class="{ 'valid-error': validation.hasError('product.price') }"
          />
        </label>
        <div class="form__btns">
          <input
            type="submit"
            value="Добавить товар"
            class="btn"
            v-on:click.stop.prevent="addProductState"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";

let id = 0;

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "product.name"(value) {
      return Validator.value(value)
        .required("Поле не может быть пустым")
        .minLength(5, "Поле должно содержать минимум 5 символов");
    },
    "product.link"(value) {
      return Validator.value(value)
        .required("Поле не может быть пустым")
        .minLength(5, "Поле должно содержать минимум 5 символов");
    },
    "product.price"(value) {
      return Validator.value(value)
        .required("Поле не может быть пустым")
        .minLength(5, "Поле должно содержать минимум 5 символов");
    },
  },
  props: {
    prod: Array,
  },
  data() {
    return {
      product: {
        name: "",
        link: "",
        desc: "",
        price: "",
        id: 0,
      },
    };
  },
  methods: {
    ...mapMutations(["addProduct"]),
    addProductState() {
      this.$validate().then((success) => {
        if (!success) return;

        id++;
        this.product.id = id;
        this.addProduct({ ...this.product });
        this.product.name = "";
        this.product.link = "";
        this.product.desc = "";
        this.product.price = "";

        this.validation.reset();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../layout.scss";

.form {
  display: flex;
  flex-direction: column;
  margin-right: rem(5px);

  @include tablets {
    width: 100%;
    margin-bottom: rem(16px);
  }

  @include phones {
    align-items: center;
    margin-right: 0;
  }

  &__block {
    margin-bottom: rem(16px);

    &:nth-child(4) {
      margin-bottom: rem(24px);
    }
  }

  &__title {
    font-size: rem(10px);
    margin-bottom: rem(4px);
  }

  &__col {
    width: rem(332px);
    // width: calc(var(--index) * 2);
    min-height: rem(440px);
    padding: rem(24px) rem(24px);
    background-color: #fffefb;
    border-radius: 6px;

    @include tablets {
      width: 100%;
    }
  }

  &__input {
    -webkit-appearance: none;
    width: rem(284px);
    height: rem(36px);
    border: solid 1px transparent;
    border-radius: 6px;
    box-shadow: 0 rem(3px) rem(15px) rem(1px) rgba(0, 0, 0, 0.1);
    padding: rem(10px) rem(10px) rem(11px) rem(16px);
    font-size: 12px;

    @include tablets {
      width: 100%;
    }

    &:focus {
      border-color: #3f3f3f;
      outline: 0;
    }

    &_textarea {
      height: rem(100px);
      resize: none;
    }
  }

  &__circle {
    display: flex;
    justify-content: flex-start;
  }

  &__btns {
    display: flex;
    justify-content: center;
  }
}

.circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: rem(4px);
  height: rem(4px);
  background: #ff8484;
  border-radius: 50%;
}

.btn {
  width: rem(284px);
  height: rem(36px);
  border: none;
  border-radius: 10px;
  font-size: rem(12px);
  color: #857777;
  cursor: pointer;
  transition: 0.5s;
  background: #eeeeee;

  &:hover {
    background: #3f3f3f;
    transition: 1s;
  }

  &:focus-visible {
    border: solid rem(1px) #3f3f3f;
    outline: 0;
  }
}

.error {
  color: #dc143c;
  font-size: calc(var(--index) * 0.7);
}

.form__input.valid-error {
  border: 1px solid #dc143c;
}
.inactive {
  &:hover {
    background: #eeeeee;
    cursor: default;
  }
}
</style>
