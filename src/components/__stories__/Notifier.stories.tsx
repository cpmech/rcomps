import React, { useState } from 'react';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Notifier } from '../Notifier';

const stories = storiesOf('Notifier', module);

stories.addDecorator(withKnobs);

const LoremIpsum = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis pharetra turpis, et
      pharetra turpis. Quisque sit amet metus feugiat, aliquet risus id, egestas elit. Fusce
      vulputate purus dui, ut molestie purus malesuada eget. Curabitur sed elit magna. Proin
      accumsan purus a tellus feugiat, ac facilisis neque imperdiet. Etiam massa augue, efficitur
      sit amet placerat at, gravida non nisi. Curabitur suscipit iaculis erat, laoreet luctus arcu
      venenatis nec. Nam mattis nibh id mi laoreet, vitae aliquet nibh volutpat. Sed id consequat
      odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
      Donec efficitur nisi imperdiet mi commodo, at mollis diam lobortis.
    </p>
    <p>
      Duis eu ipsum mi. Fusce lobortis eros libero, vel faucibus tellus consectetur et. Nulla at
      elementum metus. Sed in velit et arcu pulvinar gravida. Mauris hendrerit pretium massa.
      Phasellus ullamcorper scelerisque velit, ac egestas lacus consectetur in. Aliquam interdum
      posuere fringilla. Curabitur eu porttitor ante. Nunc vel sem ut ligula faucibus mattis ut a
      nulla. Integer bibendum gravida quam, at dignissim magna mollis gravida. Nulla aliquam nulla
      in lorem convallis posuere. Phasellus ipsum erat, cursus nec nisl sit amet, commodo placerat
      quam. In finibus quis enim in malesuada.
    </p>
    <p>
      Sed nisl nulla, vehicula nec odio aliquet, auctor hendrerit mi. Proin quis turpis quis lectus
      rutrum pellentesque id nec sem. Praesent consectetur tristique purus, vel ultricies sapien
      ullamcorper aliquet. Vestibulum eros ex, vestibulum non erat in, porttitor aliquet leo.
      Suspendisse consectetur varius mauris, et aliquet mauris porttitor vel. Aenean mattis urna ut
      nibh dictum lobortis id at arcu. Nam nulla nunc, finibus et iaculis et, consectetur rhoncus
      leo. Etiam pretium ligula vitae sapien consequat malesuada. Vivamus tincidunt scelerisque orci
      nec faucibus. Sed molestie non quam ac blandit. Aliquam hendrerit libero scelerisque, molestie
      odio non, pellentesque justo. Nunc aliquam vestibulum elit vitae sollicitudin.
    </p>
    <p>
      Aenean sodales, velit id euismod maximus, justo ante finibus velit, non elementum lectus velit
      at metus. Mauris ut ornare sapien. Aenean vitae bibendum nunc, eu vulputate elit. Praesent
      accumsan lorem vel porta tempor. Integer nec commodo nisi. Duis venenatis magna dui, vitae
      egestas orci eleifend at. Sed id dui et ipsum interdum maximus et tempor risus. Sed vitae
      venenatis erat. Sed quam orci, posuere in vulputate sit amet, tincidunt eget arcu. Vivamus
      tempus, eros vel dapibus finibus, erat quam aliquet augue, sit amet aliquet massa lectus a
      nisi. Vivamus porta ipsum eu ante ultrices, quis porta odio porta. Sed vel magna facilisis,
      imperdiet mi nec, blandit nulla. Aenean et aliquam nunc. Nullam efficitur consectetur mauris,
      auctor imperdiet sem pellentesque in. Phasellus ac turpis dictum, tempus odio vitae, mattis
      arcu.
    </p>
    <p>
      Praesent pellentesque elit nec dui sagittis, pulvinar blandit ipsum feugiat. Proin vestibulum
      turpis vitae lectus scelerisque sodales. Praesent id erat molestie ligula ornare elementum et
      sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
      Curabitur scelerisque elit in nisi posuere, sed iaculis lorem placerat. Maecenas elementum
      massa nec leo iaculis, id lacinia libero mattis. Sed non condimentum augue, venenatis
      convallis leo. Sed sapien turpis, malesuada vitae velit id, mollis pretium elit. Integer
      auctor tincidunt nibh eget pulvinar. Ut ut dolor eu neque vestibulum vestibulum. Aenean
      tristique sem fermentum elit volutpat ornare finibus in augue. In blandit sapien varius nulla
      blandit, nec placerat ex aliquam.
    </p>
  </div>
);

stories.add('default', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Notifier</button>
      {LoremIpsum}
      {open && (
        <Notifier
          title="Notifications"
          message="Hello World!"
          titleStyle={css`
            font-weight: bold;
            color: #e62739;
          `}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
});

stories.add('with caption', () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Notifier</button>
      {LoremIpsum}
      {open && (
        <Notifier
          caption="Warning. "
          message="Hello World! This is a very long message used to check text wrapping."
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
});
