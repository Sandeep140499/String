var Replace = (S, pattern , text) => 
{
      return S.split(pattern).join(text);  
};
console.log(Replace("Hi,I am You.","You","PrepBytes"));