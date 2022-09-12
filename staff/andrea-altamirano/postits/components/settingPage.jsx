const useEffect = React.useEffect
const useState = React.useState

function settingPage(){
  

    return <div class="home-page__settings-panel off">
    <fieldset class="form">
        <legend>Update name</legend>
        <form action="" class="name-form">
            <label for="name">Name</label>
            <input type="text" name="name" id="name"/>
            <button>Save</button>
        </form>
    </fieldset>

    <fieldset class="form">
        <legend>Update e-mail</legend>
        <form action="" class="email-form">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email"/>
            <button>Save</button>
        </form>
    </fieldset>

    <form action="" class="password-form">
        <fieldset class="form ">
            <legend>Update password</legend>
            <label for="oldPassword">Old password</label>
            <input type="password" name="oldPassword" id="oldPassword"/>
            <label for="newPassword">New password</label>
            <input type="password" name="newPassword" id="newPassword"/>
            <label for="newPasswordRepeat">New password</label>
            <input type="password" name="newPasswordRepeat" id="newPasswordRepeat"/>
            <button class="save-button">Save</button>
        </fieldset>
    </form>
</div>
}