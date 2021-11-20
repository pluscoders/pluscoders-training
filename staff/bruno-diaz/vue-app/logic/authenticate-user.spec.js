describe("authenticateUser", () => {
    let email, password

    beforeEach(() => {
        email = getRandomString() + "@" + getRandomString() + ".com";
        password = getRandomString("password");
    })

    it("should succeed on authenticate user", async () => {
        const fullname = getRandomString();

        await fetch("https://b00tc4mp.herokuapp.com/api/v2/users/", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: `{ "fullname": "${fullname}", "username": "${email}", "password": "${password}" }`
        });

        const token = await authenticateUser(email, password);

        const response = await fetch(
        "https://b00tc4mp.herokuapp.com/api/v2/users", {
            headers: { Authorization: `Bearer ${token}` },
        });

        const { fullname: fullname2, username: email2 } = await response.json();

        expect(fullname2).toEqual(fullname);
        expect(email2).toEqual(email);

        await fetch("https://b00tc4mp.herokuapp.com/api/v2/users", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: `{ "password": "${password}" }`
        })
        .then(response => {
            expect(response.ok).toBeDefined()
        });
    });

    it("should fail when user is no exist", async () => {
        let _error

        try {
            await authenticateUser(email, password);
        } catch (error) {
            _error = error;
        }

        expect(_error).toBeDefined();
        expect(_error.message).toEqual(`username and/or password wrong`);
    });

    it('should fail when no email', () => {
        email = undefined

        expect(() => authenticateUser(email, password)).toThrowError(TypeError, `${email} is not a string`)
    })

    it('should fail when no password', () => {
        password = undefined

        expect(() => authenticateUser(email, password)).toThrowError(TypeError, `${password} is not a string`)
    })
});
