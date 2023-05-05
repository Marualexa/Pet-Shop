<template>
  <div class="login">
    <div class="form-container">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
      <h1 class="title">Create a new password</h1>
      <p class="subtitle">Enter a neew password for yue account</p>

      <form class="forms-cont">
        <div>
          <label for="email" class="label">Email</label>
          <input
            type="text"
            v-model="user.email"
            class="input input-password"
            placeholder="email.23@gmail.com"
            :class="{ 'is-invalid': hasError('email') }"
          />
          <div v-if="hasError('email')" class="invalid-feedback">
            {{ errorObject.errorMessage }}
          </div>
        </div>

        <div>
          <label for="password" class="label">Password</label>
          <input
            type="password"
            v-model="user.password"
            placeholder="*********"
            class="input input-password"
          />
          <div v-if="hasError('password')" class="invalid-feedback">
            {{ errorObject.errorMessage }}
          </div>
        </div>

        <div>
          <label for="new-password" class="label">Re-enter password</label>
          <input
            type="password"
            v-model="user.passwordVerif"
            placeholder="*********"
            class="input input-password"
          />
          <div v-if="hasError('password')" class="invalid-feedback">
            {{ errorObject.errorMessage }}
          </div>
        </div>

        <button
          type="button"
          @click="confirmData"
          class="primary-button login-button text-center"
        >
          Confirm
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { Joi } from "vue-joi-validation";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
  passwordVerif: "",
});

const errorObject = reactive({
  errorName: "",
  errorMessage: "",
});

const userJoi = {
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  passwordVerif: Joi.ref("password"),
};

const hasError = computed(() => {
  return (property) => {
    return errorObject.errorName === property;
  };
});

const confirmData = () => {
  const resultFrom = Joi.validate(user, userJoi, (err, value) => {
    if (err) {
      let starForm = err.message;
      let starIndex = starForm.indexOf("[") + 1;
      let endIndex = starForm.indexOf("]");
      let element = starForm.substring(starIndex, endIndex);

      let cadena2 = element;

      const string = cadena2.slice(1);
      const string2 = string.indexOf('"');
      const final = string.slice(0, string2);
      let messageIndix = string.slice(string2 + 1);

      errorObject.errorName = final;
      errorObject.errorMessage = messageIndix;
    } else {
      router.push({ name: "home" });
    }
  });
};
</script>

<style scoped>
.forms-cont div {
  display: flex;
  flex-direction: column;
}
.login {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}

.form-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
}

.logo {
  width: 150px;
  margin-bottom: 25px;
  justify-self: center;
  display: none;
}

.title {
  font-size: 18px;
  margin-bottom: 12px;
  text-align: center;
}

.subtitle {
  color: #c7c7c7;
  font-size: 16px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 32px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

.input {
  background-color: #f7f7f7;
  border: none;
  border-radius: 8px;
  height: 30px;
  font-size: 16px;
  padding: 6px;
  margin-bottom: 12px;
}

.primary-button {
  background-color: #ffacac;
  border-radius: 8px;
  border: none;
  color: #f7f7f7;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
}

.login-button {
  margin-top: 14px;
  margin-bottom: 30px;
}

@media (max-width: 640px) {
  .logo {
    display: block;
  }
}
</style>
