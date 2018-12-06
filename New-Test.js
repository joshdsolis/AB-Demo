# New 

<script type="text/javascript">
     ABalytics.init({
         experiment1: [
             {
                 name: 'variant1',
                 'experiment1_text': 'Red is stop, green is go',
                 'experiment1_button':
                       '<input type="button" value="Red" onclick="ga(\'send\', \'event\', \'Red buttonclick\', \'Normal\'); alert(\'Thanks!\');">'
                       '<input type="button" value="Green" onclick="ga(\'send\', \'event\', \'Green buttonclick\', \'Normal\'); alert(\'Thanks!\');">'

             },
             {
                 name: 'variant2',
                 'experiment1_text': 'Green is stop, red is go',
                 'experiment1_button':
                       '<input type="button" value="Red" onclick="ga(\'send\', \'event\', \'Red buttonclick\', \'Switched\'); alert(\'You will be spared.\');">'
                       '<input type="button" value="Green" onclick="ga(\'send\', \'event\', \'Green buttonclick\', \'Switched\'); alert(\'You will be spared.\');">'
             }
         ]
     });
     ga('send', 'pageview');
     window.onload = function() {
         ABalytics.applyHtml();
     };
    </script>

# Old
ABalytics.init({
         experiment1: [
             {
                 name: 'variant1',
                 'experiment1_text': 'Pretty please click the button with sugar on top!',
                 'experiment1_button':
                       '<input type="button" value="Click me!" onclick="ga(\'send\', \'event\', \'buttonclick\', \'nice\'); alert(\'Thanks!\');">'
             },
             {
                 name: 'variant2',
                 'experiment1_text': 'You better click that button...',
                 'experiment1_button':
                       '<input type="button" value="Click me, OR ELSE" onclick="ga(\'send\', \'event\', \'buttonclick\', \'stern\'); alert(\'You will be spared.\');">'
             }
         ]
     });
