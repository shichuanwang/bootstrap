//加入收藏

function AddFavorite(sURL, sTitle)
{
    
    sURL = encodeURI(sURL);
    try
    {
        
        window.external.addFavorite(sURL, sTitle);
        
    }
    catch (e)
    {
        
        try
        {
            
            window.sidebar.addPanel(sTitle, sURL, "");
            
        }
        catch (e)
        {
            
            alert("加入收藏失败，请用Ctrl+D进行手动添加，或在浏览器里进行设置。.");
            
        }
        
    }
    
}

//设为首页

function SetHome(url)
{
    
    if (document.all)
    {
        
        document.body.style.behavior = 'url(#default#homepage)';
        
        document.body.setHomePage(url);
        
    }
    else
    {
        
        alert("设置首页失败，请在浏览器进行设置！");
        
    }
    
}
