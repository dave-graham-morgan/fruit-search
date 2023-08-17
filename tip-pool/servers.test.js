
describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice'; 
    submitServerInfo();
    serverNameInput.value = 'Darin'; 
    
  });

  //submitServerInfo test
  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(2);
    expect(allServers["server1"].serverName).toEqual('Alice');
    expect(allServers["server2"].serverName).toEqual('Darin');
    
  });

  //updateServerTable Test
  it('should populate the table with server names', function(){
    submitServerInfo();
    let trServer1 = document.querySelector("#server1");
    expect((trServer1.children[0].innerHTML)).toEqual('Alice');

    let trServer2 = document.querySelector("#server2");
    expect((trServer2.children[0].innerHTML)).toEqual('Darin');

  });


  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;

  });
});
