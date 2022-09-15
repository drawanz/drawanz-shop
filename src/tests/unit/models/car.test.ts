import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { idMock, carMockCreateReturn, carMockCreate, carMockUpdated } from '../../mocks/car';
import { ErrorTypes } from '../../../erros/catalog';
import CarModel from '../../../models/Cars';

describe('Testes de Car para camada model', () => {
  const carModel = new CarModel();

  describe('Verifica a função create', () => {
    it('Função create executada com sucesso', async () => {
      sinon.stub(Model, 'create').resolves(carMockCreateReturn);
      const response = await carModel.create(carMockCreate);
      expect(response).to.be.deep.equal(carMockCreateReturn);
      sinon.restore();
    });
  });

  describe('Verifica a função read', () => {
    it('Função read executada com sucesso', async () => {
      sinon.stub(Model, 'find').resolves([carMockCreateReturn]);
      const response = await carModel.read();
      expect(response).to.be.deep.equal([carMockCreateReturn]);
      sinon.restore();
    });
  });

  describe('Verifica a função readOne', () => {
    it('Função readOne executada com sucesso', async () => {
      sinon.stub(Model, 'findOne').resolves(carMockCreateReturn);
      const response = await carModel.readOne(idMock);
      expect(response).to.be.deep.equal(carMockCreateReturn);
      sinon.restore();
    });

    it('Função readOne executada com falha', async () => {
      try {
        await carModel.readOne('notValidId');
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrorTypes.InvalidId);
      }
    });
  });

  describe('Verifica a função update', () => {
    it('Função update executada com sucesso', async () => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockUpdated);
      const response = await carModel.update(idMock, carMockUpdated);
      expect(response).to.be.deep.equal(carMockUpdated);
      sinon.restore();
    });

    it('Função update executada com falha', async () => {
      try {
        await carModel.update('notValidId', carMockUpdated);
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrorTypes.InvalidId);
      }
    });
  });

  describe('Verifica a função delete', () => {
    it('Função delete executada com sucesso', async () => {
      sinon.stub(Model, 'findByIdAndDelete').resolves(carMockCreateReturn);
      const response = await carModel.delete(idMock);
      expect(response).to.be.deep.equal(carMockCreateReturn);
      sinon.restore();
    });

    it('Função delete executada com falha', async () => {
      try {
        await carModel.delete('notValidId');
      } catch (e: any) {
        expect(e.message).to.be.equal(ErrorTypes.InvalidId);
      }
    });
  });
})