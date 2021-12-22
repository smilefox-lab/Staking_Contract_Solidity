const StakingContract = artifacts.require("StakingContract");

contract("StakingContract", () => {
    it("Contract Deployed Sucessfully!", async () => {
        const stakingContract = await StakingContract.deployed();
        assert(stakingContract, "Contract Deployment Failed!");
    });

    describe("getString()", () => {
        it("returns 'String'", async () => {
            const stakingContract = await StakingContract.deployed();
            const expected = "String";
            const actual = await stakingContract.getString();

            assert.equal(actual, expected, "getString retured 'String' and did not update");
        })
    })
});
contract("StakingContract: owner", (accounts) => {
    describe("owner()", () => {
        it("returns the address of the owner", async () => {
            const stakingContract = await StakingContract.deployed();
            const owner = await stakingContract.owner();

            assert(owner, "The Current Owner");
        })

        it("matchs the address that originally deployed the contract", async () => {
            const stakingContract = await StakingContract.deployed();
            const owner = await stakingContract.owner();
            const expected = accounts[0];

            assert(owner, expected, "matches the address that deployed the contract");
        })
    })
})

contract("StakingContract: Set String", (accounts) => {
    describe("setString(string)", () => {
        it("sets the new string", async () => {
            const stakingContract = await StakingContract.deployed();
            const expected = "New String";

            await stakingContract.setString(expected);
            const actual = await stakingContract.getString();
            assert.equal(actual, expected, "setString did not update to 'New String'");
        })
    })
    describe("message was sent by another account", () => {
        it("does not set the new string", async () => {
            const stakingContract = await StakingContract.deployed();
            const expected = await stakingContract.getString();
            try {
                await stakingContract.setString("Not the owner", { from: accounts[1] });
            } catch (err) {
                const errorMessage = "Ownable: caller is not the owner";
                await assert.equal(err.reason, errorMessage, "string should not update");
                return;
            }
            assert(false, "string should not update");
        })
    })
})