//Task 5

async function security_check (ip_1, ip_2, ip_3, ip_4, ip_5) {
    let flag = 0;
    let blocked_countries = ["Russia", "Belarus", "Afghanistan", "China", "Venezuela", "Iran"];
    let ips = [ip_1, ip_2, ip_3, ip_4, ip_5];
    for (let ip of ips) {
        let res = await fetch(`http://ipwhois.app/json/${ip}`)

        if (!res.ok) {
            console.warn(`Failed to get country with ${ip}`)
            flag = 1;
            break;
        }
        let data = await res.json();
        if (blocked_countries.includes(data.country)) {
            flag = 1;
            break;
        }
    }
    if (flag) {
        alert("Our services are not available in your country");
    } else {
        alert("Welcome to our website!");
    }
    return flag;
}   

security_check(
  '8.8.8.8',
  '1.1.1.1',  
  '9.9.9.9',
  '208.67.222.222',
  '5.255.255.1'
//  '1.0.0.1'
);