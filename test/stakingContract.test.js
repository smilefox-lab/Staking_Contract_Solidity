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