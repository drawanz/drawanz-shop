import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';
import CarModel from '../../../models/Cars';
import CarService from '../../../services/Cars';
import CarController from '../../../controllers/Cars';
import { carMockCreate, carMockCreateReturn, carMockUpdated, idMock } from '../../mocks/car';
import HttpStatusCodes from '../../../helpers/httpsStatusCode';

describe('Testes de Car para camada controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  it('Verifica a função create', async () => {
    req.body = carMockCreate;
    sinon.stub(carService, 'create').resolves(carMockCreateReturn);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    await carController.create(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatusCodes.CREATED)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockCreateReturn)).to.be.true;
    sinon.restore();
  });

  it('Verifica a função read', async () => {
    sinon.stub(carService, 'read').resolves([carMockCreateReturn]);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    await carController.read(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatusCodes.OK)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith([carMockCreateReturn])).to.be.true;
    sinon.restore();
  });

  it('Verifica a função readOne', async () => {
    req.params =  { id: idMock };
    sinon.stub(carService, 'readOne').resolves(carMockCreateReturn);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    await carController.readOne(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatusCodes.OK)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockCreateReturn)).to.be.true;
    sinon.restore();
  });

  it('Verifica a função update', async () => {
    req.params =  { id: idMock };
    req.body = carMockCreate;
    sinon.stub(carService, 'update').resolves(carMockUpdated);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    await carController.update(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatusCodes.OK)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockUpdated)).to.be.true;
    sinon.restore();
  });

  it('Verifica a função delete', async () => {
    req.params =  { id: idMock };
    sinon.stub(carService, 'delete').resolves(carMockCreateReturn);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    await carController.delete(req, res);
    expect((res.status as sinon.SinonStub).calledWith(HttpStatusCodes.NO_CONTENT)).to.be.true;
    sinon.restore();
    expect((res.json as sinon.SinonStub).calledWith()).to.be.true;
    sinon.restore();
  });

});