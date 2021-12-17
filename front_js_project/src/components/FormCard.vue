<template>
    <div class="card">
      <form  @submit.prevent="onformSubmit" action="url" method="POST" id="form_action">
        <div>
          <label for="name">Ваше имя:</label>
          <br>
          <input type="text" name="user_name" id="name" class="form_name" placeholder="Иван Иванов" required><br>
        </div>
        <div>
          <label for="form_mail">Ваша почта:</label><br>
          <input type="email" name="e-mail" id="form_mail" class="form_mail" placeholder="mymail@domain.com" required><br>
        </div>
        <div>
          <label for="">Обращение:</label><br>
          <textarea name="textarea_request_form" id="text_from_textarea_request_form" class="form_textarea" placeholder="Ваш текст и что-то пипец важное..." cols="30" rows="10"></textarea>
          <br>
        </div>
        <div>
          <button  type="submit" id="SubButton">Отправить</button>
        </div>
      </form>
    </div>
</template>
<style>
</style>