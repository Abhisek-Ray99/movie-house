import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;


export const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;

  .img-wrapper {
    width: 100%;
    border-radius: 40px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }


  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

export const FlexGrid = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;