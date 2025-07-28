import React from 'react'
import CardTheme from './CardTheme';
import CardClass from './CardClass';
import CardRender from './CardRender';

interface IndexProps {

}

const Index: React.FC<IndexProps> = ({ }) => {
  return (
    <div>
      <CardTheme theme={{ textColor: 'white', backgroundColor: 'blue' }}>
        Hello Theme!
      </CardTheme>
      <CardClass className="bg-blue-500 text-white">
        Hello Class!
      </CardClass>
      <CardRender
        renderContent={(data) => (
          <div className="text-red-500">
            Custom layout with full control + {data}
          </div>
        )}
      />

    </div>
  );
}

export default Index;