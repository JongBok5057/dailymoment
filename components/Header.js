import styled from 'styled-components';

const PageName = styled.div `
    h1 {
        padding: 0;
        margin: 0;
        font-size: 62px;
        font-weight: 800;
        text-align: center;
    }
`;

const Header = () => {
    return (
        <div>
            <div>
                <PageName>
                <h1>DailyMoment</h1>
                </PageName>
            </div>
        </div>
    );
}

export default Header;